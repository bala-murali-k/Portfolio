import * as React from 'react'
import ViewTerminal from './view.terminal.component.tsx'

function TerminalCore () {

    const commandLinePrefix: string = 'balamurali@temproary:'
    const commandLineCurrentDir: string = '~$ '
    const availableCommands: any = { 
        whoami: whoami, 
        clear: 'clear', 
        pwd: pwd, 
        cat: cat,
        history: history,
        echo: echo
    }
    const [prefixEnabled, setPrefixEnabled] = React.useState<boolean>(false)
    const [terminalPersistHistory, setTerminalPersistHistory] = React.useState<any[]>([])
    const [terminalHistory, setTerminalHistory] = React.useState<any[]>([
        {
            prefix: commandLinePrefix,
            directory: commandLineCurrentDir,
            command: "welcome to my portfolio",
            isPrefixEnabled: false
        },
        {
            prefix: commandLinePrefix,
            directory: commandLineCurrentDir,
            command: "use 'cat manual' command to read manual",
            isPrefixEnabled: false
        }
    ])
    const [terminalCommand, setTerminalCommand] = React.useState<string>("")
    const availableOptions: any = {
        prefixEnabled: prefixEnabled,
        terminalPersistHistory: terminalPersistHistory,
        terminalHistory: terminalHistory,
        terminalCommand: terminalCommand,
        commandLinePrefix: commandLinePrefix,
        commandLineCurrentDir: commandLineCurrentDir,
    }

    function commandExecutioner (command: string) {

        let executionCommand: any = command.split(' ')[0]
        let executionFunction: any = availableCommands[executionCommand]

        if (command === 'clear') {
            setTerminalHistory([])
        } else if (executionFunction) {
            let response: any = executionFunction(command, availableOptions)
            let responseMap: any[] = response.map((result: any) => ({
                    prefix: commandLinePrefix,
                    directory: commandLineCurrentDir,
                    command: result,
                    isPrefixEnabled: false
            }))
            setTerminalHistory((previous: any) => ([...previous, ...responseMap]))
        console.log('here i am.', response)
        } else {
            setTerminalHistory(previous => [...previous, {
                prefix: commandLinePrefix,
                directory: commandLineCurrentDir,
                command: `${command.split(' ')[0]}: command not found`,
                isPrefixEnabled: false
            }]);
        }
    }
    // console.log('The console command is : ', terminalCommand, terminalHistory, prefixEnabled)

    // React.useEffect(() => {
    //     setTerminalPersistHistory([...terminalPersistHistory, terminalHistory])
    // }, [terminalHistory])

    return (
        <ViewTerminal 
            inputData={{
                commandLinePrefix: commandLinePrefix,
                commandLineCurrentDir: commandLineCurrentDir,
                prefixEnabled: prefixEnabled,
                terminalHistory: terminalHistory,
                terminalCommand: terminalCommand,
                terminalPersistHistory: terminalPersistHistory,
                // commandLinePrefix: commandLinePrefix,
                // commandLinePrefix: commandLinePrefix,
            }}
            inputFunction={{
                handleTerminalHistory: (state: any) => setTerminalHistory(state),
                handleTerminalCommand: (state: any) => setTerminalCommand(state),
//                 handleKeyDown: (event: any) => handleKeyDown(event),
                handlePrefix: (state: any) => setPrefixEnabled(() => (state)),
                handleCommandFunctionality: (recievedInput: string) => commandExecutioner(recievedInput),
                handleTerminalPersistHistory: (recievedData: any) => setTerminalPersistHistory(recievedData),
            }}
        />
    )
}

export default TerminalCore

function cat (command: any) {
    let result: any[] = [];
    if (command.split(' ')[1] === 'manual') {
        result.push('\n')
        result.push('Hello, My name is Bala Murali and This is my passion.')
        result.push('I Love using terminal so why not make it my Portfolio !')
        result.push(`Let's dive into how to use it.`)
        result.push('The application is in early stage of development, so there is less number of commands available.')
        result.push('Implemented Commands :')
        result.push('whoami')
        result.push('   - displays the logged user name')
        result.push('pwd')
        result.push('   - displays the present working directory')
        result.push('clear')
        result.push('   - clears the terminal screen')
        result.push('history')
        result.push('   - lists the commands used')
        result.push('cat')
        result.push('   - in early stage of developments')
        result.push('Future plans')
        result.push('1. Bug fixes in the terminal UI')
        result.push('2. Full implementations of the CAT command without options usage')
        result.push('3. File Structure Implementaion')
        result.push('\n')
        // result.push('')
        // result.push('')
    }
    return result
}

function whoami (command: any) {
    return ['balamurali']
}

function pwd (command: any, options: any = {}) {
    return [`/home/balamurali`]
}

function history (command: any, options: any = {}) {
    console.log("The history console is : ", options.terminalPersistHistory)
    const result: any[] = options.terminalPersistHistory.map((historyRecord: any, index: number) => (`${index + 1} ${historyRecord.command}`))
    // return [...options.terminalPersistHistory.command]
    return result
}

function echo (command: any, options: any = {}) {
    let result = command.split(' ')
    result.shift()
    console.log("The echo result is : ", result)
    return [result.join(' ')]
}