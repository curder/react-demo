
## Redux 的使用

1. 创建一个对象, 作为要保存的状态

2. 创建 Store 来存储这个 state
    - 创建store时必须创建reducer
    - 可以通过 store.getState 来获取当前的state

3. 通过 action 来修改 state

   - 通过 dispatch 来派发 action
   - 通常 action 中都会有 type 属性, 也可以携带其他的数据
   
4. 修改 reducer 中的处理代码

    - 这里一定要记住, reducer 是一个纯函数, 不要直接修改 state

![](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Redux 三大原则

### 单一数据源

- 整个应用程序的状态 state 被存储在一个对象树中, 并且这个对象树只存储在一个 store 中
- Redux 并没有强制能创建多个 Store, 但是那样做并不利于数据的维护
- 单一的数据源可以让整个应用程序的状态 state 变得方便维护、追踪、修改


### 状态是只读的

- 唯一修改 state 的方法就是触发 action, action 是一个用于描述已发生事件的普通对象
- 这样确保了视图和网络请求都不能直接修改 state, 他们只能表达想要修改 state 的意图
- 这样可以保证所有的修改都被集中化处理, 并且按照严格的顺序来执行, 而且可以记录每次修改的记录, 实现撤销和重做功能


### 状态修改由纯函数 reducer 完成

- 通过 reducer 将旧 state 和 actions 联系在一起, 并且返回一个新的 state
- 随着应用程序的复杂度增加, 可以将 reducer 拆分成多个小的 reducers, 分别操作不同state tree的一部分
- 所有的 reducer 都应该是纯函数, 不能产生任何的副作用；