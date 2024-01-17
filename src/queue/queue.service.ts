import { InjectQueue } from "@nestjs/bull";
import { Injectable, Logger } from "@nestjs/common";
import { Queue } from "bull";
import { REGISTERED_QUEUE } from "src/utilities/constant";
import { QueueJobsEnum } from "src/utilities/enums";
import {
    NotificationCreateInterface,
    SendMailMessageInterface,
} from "src/utilities/interfaces";

@Injectable()
export default class QueueService {


    constructor(
        @InjectQueue(REGISTERED_QUEUE.QUEUE)
        private readonly queuesHandlerEvent: Queue
    ) { }

    bullQueNotification(data: NotificationCreateInterface) {
        Logger.log("bullQueNotification Initializing");
        try {
            this.queuesHandlerEvent.add(QueueJobsEnum.NOTIFICATION_JOB, data, {
                delay: 1000,
            });
        } catch (error) {
            Logger.error("bullQueNotification error", error);
        }
    }

    bullQueEmail(data: SendMailMessageInterface) {
        try {
            this.queuesHandlerEvent.add(QueueJobsEnum.EMAIL_JOB, data, {
                delay: 1000,
            });
        } catch (error) {
            Logger.error("bullQueEmail error", error);
        }
    }

}