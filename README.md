# 组件库架子 Demo

## 代码风格与代码提交规范

- editorconfig 统一编辑器代码格式

- prettier 配置样式

- ESLint 代码格式规范

- commitizen 确保提交代码时, commit message 规范

- husky 拦截commit, 进行eslnit检查, 并使用commitize模版进行提交, 

## 样式文件存放逻辑
```
style文件夹
  _variables.scss 全局样式变量
  _mixin.scss     全局样式mixin混入
  function.scss   全局function
  index.scss      全局样式导出位置

component文件夹
  Button(组件)
    style.scss    单独组件样式
```

## 文件目录

src

|- style 存放公共样式和变量

|- components 存放组件

|- 其他正在规划中

## 打包

正在使用 vite, 下一步将会改成 create react app

## 参考内容

课程: https://pan.baidu.com/s/1fNWc4L3oQPhiKniwNFvcTQ?pwd=ts6a

代码: https://github.com/chenshone/chenshone-ui

