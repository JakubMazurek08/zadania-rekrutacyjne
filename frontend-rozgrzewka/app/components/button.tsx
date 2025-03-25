import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
    "text-white",
    {
    variants:{
        flavour: {
            primary: "bg-blue-500 hover:bg-blue-600 active:bg-blue-400",
            success: "bg-green-500 hover:bg-green-600 active:bg-green-400",
            warning: "bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600",
            danger: "bg-red-500 hover:bg-red-600 active:bg-red-400",
            inverse: "bg-gray-700 hover:bg-gray-600 active:bg-gray-800",
            purple: "bg-violet-700 hover:bg-violet-800 active:bg-violet-600"
        },
        size: {
            small: "px-2 h-8",
            medium: "px-4 h-10 text-xl",
            large: "px-8 h-12 text-2xl",
            xl: "px-12 h-14 text-[30px]",
        },
        roundness: {
            square: "rounded-none",
            small: "rounded-sm",
            base: "rounded-md",
            medium: "rounded-lg",
            large: "rounded-xl",
            xl: "rounded-[14px]",
            '2xl' : "rounded-2xl",
            circular: "rounded-full"
        },
        animated:{
            false:null,
            true:"hover:scale-110 active:scale-100 transition-all duration-200"
        }
    },
    defaultVariants:{
        flavour:"primary",
        size:"medium",
        roundness:"base",
        animated: false,
    }
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}


export const Button: React.FC<ButtonProps> = ({children, flavour, size, roundness, animated}) => {
    return(
        <button className={cn(buttonVariants({flavour, size, roundness, animated}))}>
            {children}
        </button>
    )

}