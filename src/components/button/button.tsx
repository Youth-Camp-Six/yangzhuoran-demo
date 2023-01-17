import React, { memo } from 'react'
import type { ReactNode } from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link'
// }
type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: ReactNode
}

// HTML button元素的属性结合上自定义属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>

// 将Button组件的所有属性转化为可选的
export type ButtonProps = Partial<NativeButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, ...restProps } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size
    // disabled: btnType === ButtonType.Link && disabled
  })

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default memo(Button)
