import { styled } from "@mui/material/styles"

const PREFIX = "Auth"
export const classes = {
	root: `${PREFIX}-root`,
	paper: `${PREFIX}-paper`,
	avatar: `${PREFIX}-avatar`,
	form: `${PREFIX}-form`,
	captchaImg: `${PREFIX}-captchaImg`,
	submit: `${PREFIX}-submit`,
}

export const BpIcon = styled("span")(({ theme }) => ({
	borderRadius: 3,
	width: 16,
	height: 16,
	boxShadow: theme.palette.mode === "dark" ? "0 0 0 1px rgb(16 22 26 / 40%)" : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
	backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
	backgroundImage: theme.palette.mode === "dark" ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))" : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
	".Mui-focusVisible &": {
		outline: "2px auto black",
		outlineOffset: 2,
	},
	"input:hover ~ &": {
		backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
	},
	"input:disabled ~ &": {
		boxShadow: "none",
		background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
	},
}))

export const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: "black",
	backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
	"&:before": {
		display: "block",
		width: 16,
		height: 16,
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
			" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
			"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""',
	},
	"input:hover ~ &": {
		backgroundColor: "gray",
	},
})

export const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        "& .MuiButtonBase-root": {
            color: "black",
        },
    },
    [`& .${classes.paper}`]: {
        marginTop: 100, //
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        padding: "20px 0",
    },
    [`& .${classes.avatar}`]: {
        marginBottom: 10,
        backgroundColor: "#393464",
    },
    [`& .${classes.form}`]: {
        width: 360,
    },
    [`& .${classes.captchaImg}`]: {
        paddingTop: 3,
        width: "100%",
        height: 50,
        objectFit: "cover",
        borderRadius: 5,
        objectPosition: "0 -37px",
    },
    [`& .${classes.submit}`]: {
        margin: "10px 0",
        backgroundColor: "#393464",
    },
    [theme.breakpoints.down(400)]: {
        [`& .${classes.form}`]: {
            width: 320
        }
    },
    [theme.breakpoints.down(370)]: {
        [`& .${classes.form}`]: {
            width: 300
        }
    }

}))
