import * as React from 'react'
import ViewTerminal from './view.terminal.component.tsx'

function TerminalCore () {

    const commandLinePrefix: string = 'balamurali@temproary:'
    const commandLineCurrentDir: string = '~$ '
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

        if (command === 'clear') {
            setTerminalHistory([]);
        }
        if (command === 'whoami') {
            setTerminalHistory([...terminalHistory, {
                prefix: commandLinePrefix,
                directory: commandLineCurrentDir,
                command: "balamurali",
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
                handleKeyDown: (event: any) => handleKeyDown(event),
                handlePrefix: (state: any) => setPrefixEnabled(() => (state)),
                handleCommandFunctionality: (recievedInput: string) => commandExecutioner(recievedInput),
                handleTerminalPersistHistory: (recievedData: any) => setTerminalPersistHistory(recievedData),
            }}
        />
    )
}

export default TerminalCore