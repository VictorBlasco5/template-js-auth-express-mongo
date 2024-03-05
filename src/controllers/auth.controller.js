export const register = async (req, res) => {
    res.status(200).json(
        {
        success: true,
        message: "server is healthy"
        }
    )
}


export const login = async (req, res) => {
    res.status(200).json(
        {
        success: true,
        message: "Login is successfully"
    }
    )
}