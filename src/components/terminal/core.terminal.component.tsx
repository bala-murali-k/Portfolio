import * as React from 'react'
import ViewTerminal from './view.terminal.component.tsx'

function TerminalCore () {

    const commandLinePrefix: string = 'balamurali@temproary:'
    const commandLineCurrentDir: string = '~$ '
    const availableCommands: any[] = ['whoami', 'clear']
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
            command: "use manual command",
            isPrefixEnabled: false
        }
    ])
    const [terminalCommand, setTerminalCommand] = React.useState<string>("")

    function commandExecutioner (command: string) {

        if (!availableCommands.includes(command)) {
            setTerminalHistory(previous => [...previous, {
                prefix: commandLinePrefix,
                directory: commandLineCurrentDir,
                command: `${command}: command not found`,
                isPrefixEnabled: false
            }]);
        }

        if (command === 'clear') {
            setTerminalHistory([]);
            return;
        }
        if (command === 'whoami') {
            setTerminalHistory((previous: any) => [...previous, {
                prefix: commandLinePrefix,
                directory: commandLineCurrentDir,
                command: "balamurali",
                isPrefixEnabled: false
            }]);
        }
    }
    console.log('The console command is : ', terminalCommand, terminalHistory, prefixEnabled)

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
