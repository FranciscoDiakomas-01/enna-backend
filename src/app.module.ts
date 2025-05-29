import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { TaskModule } from "./modules/task/task.module";
import { TicketModule } from "./modules/ticket/ticket.module";
import { NotificationModule } from "./modules/notification/notification.module";
import { SectorModule } from "./modules/sector/sector.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";
import { DashModule } from "./modules/dash/dash.module";
import DatabaseModule from "./modules/database/database.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtMiddleware } from "./middleware/jwt.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    TaskModule,
    TicketModule,
    NotificationModule,
    SectorModule,
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    AuthModule,
    DashModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  constructor(private readonly jwtService: JwtService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: "auth", method: RequestMethod.ALL },
        { path: "auth/(.*)", method: RequestMethod.ALL } 
      )
      .forRoutes("*");
  }
}
