## 运行 pnpm dev

### from组件使用演示文件: ./src/pages/MyRCFieldForm.tsx

### 目前仅实现了对受控组件双向绑定. 数据校验还未实现. 

### 目前对表单组件(input、radio、checkbox.....)的要求: 
* 组件有可选参数, value属性, 用于传入显示表单组件的值
* 数据变化时, 有onChange回掉函数, 参数即为新值
