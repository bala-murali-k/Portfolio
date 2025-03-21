import * as React from 'react'
import { Box, Typography } from '@mui/material'

function ViewTerminal () {

    const commandLinePrefix: string = 'balamurali@temproary:'
    const commandLineCurrentDir: string = '~$ '
    const terminalRef:any = React.useRef(null)
    const [terminalHistory, setTerminalHistory] = React.useState<any[]>([])
    const [terminalCommand, setTerminalCommand] = React.useState<string>("")
    console.log('The console command is : ', terminalCommand, terminalHistory)

    function handleKeyDown (event: any) {
        switch (event.key) {
            case 'Backspace':
                setTerminalCommand(terminalCommand.slice(0, -1))
                break
            case 'Enter':
                setTerminalHistory([...terminalHistory, terminalCommand])
                setTerminalCommand("")
                break
            case 'Alt':
                break
            case 'Shift':
                break
            case 'Control':
                break
//             case 'Backspace':
//                 break
            default:
                setTerminalCommand(terminalCommand + event.key)
                break
        }
//         if (event.key)
        console.log('The key pressed is : ', event.key)
    }

    React.useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.focus()
        }
    }, [])

    return (
        <Box sx={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box ref={terminalRef} tabIndex={0} onKeyDown={(event) => handleKeyDown(event)} sx={{ width: '80%', height: '90%', backgroundColor: '#000' }} >
                {terminalHistory?.map((sessionHistory: any, index: number) => {
                    return (
                        <Box key={index} sx={{ display: 'block', pl: 1, mb: 0, pb: 0 }} >
                            <Typography sx={{ color: 'green', display: 'inline-block' }} >
                                {commandLinePrefix}
                            </Typography>
                            <Typography sx={{ color: 'royalBlue', display: 'inline-block' }} >
                                { commandLineCurrentDir }
                            </Typography>
                            <Typography sx={{ color: 'darkGreen', display: 'inline-block', ml: 2 }} >
                                { sessionHistory }
                            </Typography>
                        </Box>
                    )
                })}
                <Box sx={{ display: 'block', pl: 1, }} >
                    <Typography sx={{ color: 'green', display: 'inline-block' }} >
                        {commandLinePrefix}
                    </Typography>
                    <Typography sx={{ color: 'royalBlue', display: 'inline-block' }} >
                        { commandLineCurrentDir }
                    </Typography>
                    <Typography sx={{ color: 'darkGreen', display: 'inline-block', ml: 2 }} >
                        { terminalCommand }
                    </Typography>
                    <Box component='span'
                        sx={{
                            backgroundColor: 'white',
                            width: '10px',
                            height: '15px',
                            zIndex: 10,
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
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ViewTerminal
