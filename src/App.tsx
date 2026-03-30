import { TimerIcon } from "lucide-react"
import { Heading } from "./components/Heading"
import "./styles/global.css"

export const App = () => {



    return (
        <>
            <Heading >
                Welcome to the Pomodoro Timer!
                <button>

                    <TimerIcon />
                </button>
            </Heading>
            <p>
                This is a simple Pomodoro timer built with React. It helps you manage your time effectively by breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. The timer will notify you when it's time to take a break or get back to work. Stay focused and boost your productivity with this handy tool!
            </p>
        </>
    )
}