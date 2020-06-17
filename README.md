## mobx-migration-example

#### Get started

simple example for mobx migration, includes some branchs, you can switch branchs for migration 
 - master
    
    use mobx state in class component with provide/inject pattern (I love that pattern but time to drop it) 
    
 - mobx-fun
    
    use mobx state in function component with provide/inject pattern (simple migration)
 - mobx-fun-hook
    
    use mobx state in function component without inject(use MobXProviderContext, mostly that's what you need)

- mobx-context

    use mobx state in class component with React context, not provide/inject (you may use this style in you code now)

- mobx-context-hook

    use mobx state in function component with React useContext(if you are using mobx React context style, you need this for migration)

