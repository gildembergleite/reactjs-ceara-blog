import { HTMLAttributes } from 'react'

export const Typography = {
  H1: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...rest}
    >
      {children}
    </h1>
  ),
  H2: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...rest}
    >
      {children}
    </h2>
  ),
  H3: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...rest}>
      {children}
    </h3>
  ),
  H4: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...rest}>
      {children}
    </h4>
  ),
  Paragraph: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...rest}>
      {children}
    </p>
  ),
  Lead: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-xl text-muted-foreground" {...rest}>
      {children}
    </p>
  ),
  Large: ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
    <div className="text-lg font-semibold" {...rest}>
      {children}
    </div>
  ),
  Small: ({ children, className, ...rest }: HTMLAttributes<HTMLElement>) => (
    <small className="text-sm font-medium leading-none" {...rest}>
      {children}
    </small>
  ),
  Muted: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-sm text-muted-foreground" {...rest}>
      {children}
    </p>
  ),
}
