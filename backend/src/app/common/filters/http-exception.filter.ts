import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    httpAdapterHost: { httpAdapter: any; };

    private readonly logger = new Logger(AllExceptionsFilter.name)

    catch(exception: any, host: ArgumentsHost) {


        const ctx = host.switchToHttp();

        const response = ctx.getResponse()
        const request = ctx.getRequest()

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;


        const message =
            exception instanceof HttpException ? exception.getResponse() : exception;



        this.logger.error(`HTTP status ${status}, Error message: ${JSON.stringify(message)}`)
        if (exception instanceof HttpException) {
            response.status(status).json({
                message
            })
        } else {
            response.status(status).json({
                timestamp: new Date().toISOString(),
                path: request.url,
                message: message
            })
        }


    }

}