import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export const Typography = {
  H1: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={twMerge("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
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
      className={twMerge("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
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
    <h3 className={twMerge("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...rest}>
      {children}
    </h3>
  ),
  H4: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={twMerge("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...rest}>
      {children}
    </h4>
  ),
  Paragraph: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-6", className)} {...rest}>
      {children}
    </p>
  ),
  Lead: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={twMerge("text-xl text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  ),
  Large: ({ children, className, ...rest }: HTMLAttributes<HTMLSpanElement>) => (
    <span className={twMerge("text-lg font-medium", className)} {...rest}>
      {children}
    </span>
  ),
  Small: ({ children, className, ...rest }: HTMLAttributes<HTMLElement>) => (
    <small className={twMerge("text-sm font-medium leading-none", className)} {...rest}>
      {children}
    </small>
  ),
  Muted: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={twMerge("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  ),
}
