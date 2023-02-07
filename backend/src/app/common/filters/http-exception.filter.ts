import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    httpAdapterHost: { httpAdapter: any; };

    private readonly logger = new Logger(AllExceptionsFilter.name)

    catch(exception: any, host: ArgumentsHost) {
        

        const ctx = host.switchToHttp();

        const response = ctx.getResponse()
        const request = ctx.getRequest()

        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : 500;

        const message = exception instanceof HttpException ? exception.getResponse() : "Error"

        this.logger.error(`HTTP status ${httpStatus}, Error message: ${JSON.stringify(message)}`)
        response.status(httpStatus).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            message: message
        })

    }

}