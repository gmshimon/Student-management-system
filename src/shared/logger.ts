import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

// Custom Log Format
const myFormat = printf(({ level, message, label }) => {
  const dates = new Date();
  const day = dates.getDay();
  const date = dates.getDate();
  const year = dates.getFullYear();
  return `${date}-${day}-${year} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PHU' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'success.log'
      ),
      level: 'info',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'error.log'
      ),
      level: 'error',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorLogger };
