import React, { memo } from 'react'
import type { ReactNode } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: ReactNode
  href?: string
}

// HTML button元素的属性结合上自定义属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>

// HTML a元素的属性结合上自定义属性
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>

// 将Button组件的所有属性转化为可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...restProps } =
    props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled
  })

  // 根据不同类型, 显示button或者a
  // if (btnType === ButtonType.Link) {
  //   return (
  //     // <div dangerouslySetInnerHTML={createMarkup()}></div>
  //     <a data-href={href ?? 'javascript:;'} className={classes} {...restProps}>
  //       {children}
  //     </a>
  //   )
  // } else {
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
  // }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default memo(Button)
