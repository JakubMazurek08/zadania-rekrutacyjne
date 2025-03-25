import {Meta, StoryObj} from "@storybook/react";

import {Button} from "@/app/components/button";

const meta:Meta = {
    title: "Components/UI/Button",
    component: Button,
    tags: ["autodocs"],
    parameters:{
        layout:"centered",
    },
    args:{
        flavour:"primary",
        size:"medium",
        roundness:"base",
        animated:false,
    },
    argTypes:{
        flavour:{
            control: "select",
            description: "Button's color",
            options: [
                "primary",
                "success",
                "warning",
                "danger",
                "inverse",
                "purple"
            ]
        },
        size:{
            control: "select",
            description: "Button's size",
            options: [
                "small",
                "medium",
                "large",
                "xl"
            ]
        },
        roundness:{
            control: "select",
            description: "Button's border roundness",
            options: [
                "square",
                "small",
                "base",
                "medium",
                "large",
                "xl",
                "2xl",
                "circular"
            ]
        },
        animated:{
            control: "boolean",
            description: "Should button should have hover and click animations",
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
    args: {
        children: "Default Button",
    }
}

export const AnimatedButton: Story = {
    args:{
        children: "Animated Button",
        animated: true,
    }
}

export const SquareWarningButton: Story = {
    args: {
        children: "Warning",
        flavour: "warning",
        size: "medium",
        roundness: "square",
    }
}

export const BigDangerButton: Story = {
    args: {
        children: "Danger!",
        flavour: "danger",
        size: "xl",
        roundness: "medium",
    }
}

export const RoundSuccessButton: Story = {
    args: {
        children: "Success",
        flavour: "success",
        size: "medium",
        roundness: "circular",
    }
}

export const SmallPurpleButton: Story = {
    args: {
        children: "I Am Purple",
        flavour: "purple",
        size: "small"
    }
}



