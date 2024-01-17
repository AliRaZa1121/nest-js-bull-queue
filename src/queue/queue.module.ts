import { BullModule } from "@nestjs/bull";
import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { QueueEventHandler } from "./queue-event.handler";
import QueueService from "./queue.service";
import { REGISTERED_QUEUE } from "src/utilities/constant";

@Global()
@Module({
    imports: [
        BullModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                redis: {
                    host: configService.get("REDIS_HOST"),
                    port: Number(configService.get("REDIS_PORT")),
                },
            }),
            inject: [ConfigService],
        }),
        BullModule.registerQueue({
            name: REGISTERED_QUEUE.QUEUE,
        }),
    ],
    exports: [QueueService],
    providers: [QueueService, QueueEventHandler],
})
export default class QueueModule { }