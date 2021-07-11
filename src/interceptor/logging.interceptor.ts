import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as fs from 'fs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    console.log('Before...');
    const time = Date.now();
    const timeLocal = new Date().toLocaleString();
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const method = request.method;
    const url = request.url;
    const body = JSON.stringify(request.body);

    fs.appendFileSync(
      'src/log/debug.log',
      `${method} ${url} Query params: ${JSON.stringify(
        request.query,
      )} Body params: ${JSON.stringify(body)} Respons Status code: ${
        response.statusCode
      } Time finished: ${time}ms \n`,
    );

    return next.handle().pipe(
      tap(() => {
        console.log(`After... ${time}ms - ${timeLocal}`);
        Logger.log(
          `${method} ${url} Query params: ${JSON.stringify(
            request.query,
          )} Body params: ${JSON.stringify(body)} Respons Status code: ${
            response.statusCode
          } Time finished: ${time}ms`,
          context.getClass().name,
        );
      }),
    );
  }
}
