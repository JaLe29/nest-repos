import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { UsersResolver } from '../users/users.resolver'

import { UsersModule } from '../users/users.module'
import { PublisherModule } from '../core/publisher/publisher.module'
import { TasksResolver } from 'modules/tasks/tasks.resolver'
import { TasksModule } from 'modules/tasks/tasks.module'

const resolvers = [
  UsersResolver,
  TasksResolver,
]

const GraphQLDefinition = GraphQLModule.forRoot({
  installSubscriptionHandlers: true,
  context: ({ req, connection }) => {
    // subscriptions
    if (connection) {
      return { req: connection.context }
    }

    // queries and mutations
    return { req }
  },
  autoSchemaFile: true,
  path: '/graphql',
  sortSchema: true,
  playground: true,
  typePaths: [],
})

@Module({
  imports: [
    GraphQLDefinition,
    UsersModule,
    PublisherModule,
    TasksModule,
  ],
  providers: [...resolvers],
})
export class GraphqlModule { }
