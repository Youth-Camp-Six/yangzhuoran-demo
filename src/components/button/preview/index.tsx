import React from 'react'
import Button from '../button'
// import Button, { ButtonSize, ButtonType } from '../button'
// import Button, { ButtonType } from '../button'
import Style from './preview.module.scss'

function ButtonDev() {
  return (
    <div className={Style.ButtonDev}>
      <h2>App</h2>
      <div className={Style.item}>
        <Button>默认样式</Button>
      </div>
      <div className={Style.item}>
        <Button btnType="default" disabled={true}>
          disabled
        </Button>
      </div>
      <div className={Style.item}>
        <Button btnType="primary">primary</Button>
      </div>
      <div className={Style.item}>
        <Button btnType="primary" size="lg">
          Large
        </Button>
      </div>
      <div className={Style.item}>
        <Button btnType="primary" size="sm">
          Small
        </Button>
      </div>
      <div className={Style.item}>
        <Button btnType="link">Link</Button>
      </div>
    </div>
  )
}

export default ButtonDev
