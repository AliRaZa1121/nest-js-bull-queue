import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { QueueJobsEnum } from "src/utilities/enums";
import { REGISTERED_QUEUE } from "src/utilities/constant";
import { NotificationCreateInterface, SendMailMessageInterface } from "src/utilities/interfaces";

@Processor(REGISTERED_QUEUE.QUEUE) //NOTE: this is the queue name which we have registered in queue.module.ts 
export class QueueEventHandler {
    constructor(
    ) { }

    //NOTE:/ NOTIFICATION JOB
    @Process(QueueJobsEnum.NOTIFICATION_JOB)
    notificationJobs(job: Job<NotificationCreateInterface>) {
        console.log("notificationJobs", job.data);
        //NOTE: here you can call your service to send notification and make generic so you can use single job for all notification types
    }

    //NOTE:/ EMAIL JOB
    @Process(QueueJobsEnum.EMAIL_JOB)
    emailJobs(job: Job<SendMailMessageInterface>) {
        console.log("emailJobs", job.data);
        //NOTE: here you can call your service to send email and make generic so you can use single job for all email types
    }
}