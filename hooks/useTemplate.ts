import { DocumentContext } from "@/components/DocumentProvider/DocumentProvider"
import { useContext } from "react"

export const useTemplate = () => {
    return useContext(DocumentContext)
}