import * as React from 'react'
import { Box, Typography } from '@mui/material'

function ViewTerminal ({ inputData, inputFunction }: any) {

    const terminalRef:any = React.useRef(null)
    const [isTyping, setIsTyping] = React.useState<boolean>(false)
    // console.log("the log is : ", isTyping)

    React.useEffect(() => {
        if (inputData?.prefixEnabled) {
            inputFunction?.handleTerminalHistory([...inputData?.terminalHistory, {
                prefix: inputData?.commandLinePrefix,
                directory: inputData?.commandLineCurrentDir,
                command: inputData?.terminalCommand,
                isPrefixEnabled: inputData?.prefixEnabled
            }])
            inputFunction?.handleTerminalPersistHistory([...inputData?.terminalPersistHistory, {
                prefix: inputData?.commandLinePrefix,
                directory: inputData?.commandLineCurrentDir,
                command: inputData?.terminalCommand,
                isPrefixEnabled: inputData?.prefixEnabled
            }])
            inputFunction?.handleCommandFunctionality(inputData?.terminalCommand)
            inputFunction?.handleTerminalCommand("")
            inputFunction?.handlePrefix(false)
        }
    }, [inputData?.prefixEnabled])

    function handleKeyDown (event: any) {
        setIsTyping(true)
        setTimeout(() => setIsTyping(false), 1000)
        switch (event.key) {
            case 'Backspace':
                inputFunction?.handleTerminalCommand(inputData?.terminalCommand.slice(0, -1))
                break
            case 'Enter':
                inputFunction?.handlePrefix(true)
                break
            case 'Alt':
                break
            case 'Shift':
                break
            case 'Control':
                break
            case 'Tab':
                break
            default:
                inputFunction?.handleTerminalCommand(inputData?.terminalCommand + event.key)
                break
        }
        // console.log('The key pressed is : ', event.key, inputData?.prefixEnabled)
        // setIsTyping(false)
    }

    React.useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.focus()
        }
    }, [])

    return (
        <Box sx={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box ref={terminalRef} tabIndex={0} onKeyDown={(event) => handleKeyDown(event)} sx={{ width: '80%', height: '90%', backgroundColor: '#000' }} >
                {inputData?.terminalHistory?.map((sessionHistory: any, index: number) => {
                    return (
                        <Box key={index} sx={{ display: 'block', pl: 1, mb: 0, pb: 0 }} >
                            {sessionHistory?.isPrefixEnabled && 
                                <>
                                    <Typography sx={{ color: 'green', display: 'inline-block' }} >
                                        {sessionHistory?.prefix}
                                    </Typography>
                                    <Typography sx={{ color: 'royalBlue', display: 'inline-block' }} >
                                        { sessionHistory?.directory }
                                    </Typography>
                                </>
                            }
                            <Typography sx={{ color: 'darkGreen', display: 'inline-block', ml: sessionHistory?.isPrefixEnabled ? 2 : 0 }} >
                                { sessionHistory?.command }
                            </Typography>
                        </Box>
                    )
                })}
                <Box sx={{ display: 'block', pl: 1, }} >
                    <Typography sx={{ color: 'green', display: 'inline-block' }} >
                        {inputData?.commandLinePrefix}
                    </Typography>
                    <Typography sx={{ color: 'royalBlue', display: 'inline-block' }} >
                        { inputData?.commandLineCurrentDir }
                    </Typography>
                    <Typography sx={{ color: 'darkGreen', display: 'inline-block', ml: 2 }} >
                        { inputData?.terminalCommand }
                    </Typography>
                    <Box component='span'
                        sx={{
                            backgroundColor: 'white',
                            zIndex: 10,
                            height: '100%',
                            width: '2px',
                            display: 'inline-block',
                            ml: 0.5,
                            mt: 1,
                            animation: 'blink 1s steps(2, start) infinite',
                            '@keyframes blink': {
                                '0%': { opacity: 1 },
                                '10%': { opacity: 0.8 },
                                '20%': { opacity: 0.6 },
                                '30%': { opacity: 0.4 },
                                '40%': { opacity: 0.2 },
                                '50%': { opacity: 0 },
                                '60%': { opacity: 0.2 },
                                '70%': { opacity: 0.4 },
                                '80%': { opacity: 0.6 },
                                '90%': { opacity: 0.8 },
                                '100%': { opacity: 1 },
                            },
                            // opacity: isTyping && 1
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ViewTerminal