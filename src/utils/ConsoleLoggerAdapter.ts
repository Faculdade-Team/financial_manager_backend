export interface ILogger {
  info(message: string): void
  error(message: string): void
  warn?(message: string): void
}

export class ConsoleLoggerAdapter implements ILogger {
  info(message: string) {
    console.info(`[INFO]: ${message}`)
  }
  error(message: string) {
    console.error(`[ERROR]: ${message}`)
  }
  warn?(message: string) {
    console.warn(`[WARN]: ${message}`)
  }
}
