import React, { ReactChildren } from "react"

type Props = {
  children: JSX.Element | JSX.Element[]
}

type Error = {
  message?: "string"
}

type State = {
  error: null | Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return error
      ? { error }
      : {
          error: {
            message: "Something went wrong.",
          },
        }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo)
  // }

  render() {
    if (this.state.error) {
      const { message } = this.state.error

      return <h1>{message}</h1>
    }

    return this.props.children
  }
}
