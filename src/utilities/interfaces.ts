export interface NotificationCreateInterface {
    // here you can define your notification interface
}


// This email interface is intended for Node Mailer. You can modify it as per your needs and use it for queuing purposes.
export interface SendMailMessageInterface {
    email: string;
    subject: string;
    body: string;
    name: string;
    link?: string;
    linkText?: string;
    cc?: string | Array<string>;
    bcc?: string | Array<string>;
    attachments?: {
        filename: string;
        content?: any;
        path?: string;
        contentType?: string;
        cid?: string;
        encoding?: string;
        contentDisposition?: "attachment" | "inline" | undefined;
        href?: string;
    }[];
}