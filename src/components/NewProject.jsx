import Input from "./Input"
export default function NewProject() {
    return <div>
        <menu>
            <li><butto>Cancel</butto></li>
            <li><butto>Save</butto></li>
            </menu>
            <div>
                <Input label="Title"/>
                <Input label="Description" isTextarea/>
                <Input label="Due Date"/>
            </div>
    </div>
}