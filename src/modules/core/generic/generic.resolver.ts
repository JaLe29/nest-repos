import { Type, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { pascalCase } from 'change-case';
import { PaginationArgs } from 'global/args/PaginationArgs';
import { DeleteResultDto } from 'global/database/DeleteResult.dto';
import { UpdateResultDto } from 'global/database/UpdateResult.dto';
import { GenericService } from './generic.service';

export const GenericResolver = <Entity extends Type<unknown>, CreateDto extends Type<unknown>, EditDto extends Type<unknown>, WhereDto extends Type<unknown>>(
	entityClassRef: Entity,
	createDtoClassRef: CreateDto,
	editDtoClassRef: EditDto,
	whereDtoClassRef: WhereDto,
	module: { name: string },
): any => {
	@Resolver({ isAbstract: true })
	abstract class GenericResolverHost {

		constructor(
			private readonly entityService: GenericService<Entity, CreateDto, EditDto, WhereDto>,
			// private readonly publisherService: PublisherService,
		) { }
		// @UseGuards(JwtAuthGuard)
		@Query(() => entityClassRef, { name: `${module.name}One` })
		findOne(
			@Args({ name: 'where', type: () => whereDtoClassRef }) where: WhereDto,
		): Promise<Entity | undefined> {
			return this.entityService.findOne(where);
		}

		@Query(() => [entityClassRef], { name: `${module.name}List` })
		findAll(
			@Args({ name: 'where', type: () => whereDtoClassRef }) where: WhereDto,
			@Args({ name: 'pagination', type: () => PaginationArgs, nullable: true }) pagination: PaginationArgs,
		): Promise<Entity[]> {
			return this.entityService.findAll(where, pagination);
		}

		@Mutation(() => UpdateResultDto, { name: `update${pascalCase(module.name)}` })
		update(
			@Args({ name: 'where', type: () => whereDtoClassRef }) where: WhereDto,
			@Args({ name: 'data', type: () => editDtoClassRef }) data: EditDto,
		): Promise<UpdateResultDto> {
			return this.entityService.update(where, data);
		}

		@Mutation(() => DeleteResultDto, { name: `delete${pascalCase(module.name)}` })
		deleteOne(
			@Args({ name: 'id', type: () => Int }) id: number,
		): Promise<DeleteResultDto> {
			// todo delete set status na 3 cascade
			return this.entityService.delete(id);
		}

		@Mutation(() => [entityClassRef], { name: `create${pascalCase(module.name)}` })
		createOne(
			@Args({ name: 'data', type: () => createDtoClassRef }) data: CreateDto,
		): Promise<Entity> {
			return this.entityService.createOne(data);
		}

	}
	return GenericResolverHost;
};
