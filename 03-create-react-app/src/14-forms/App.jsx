import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            gender: '',
            agree: false,
            hobbies: [
                { name: 'sing', label: 'Sing', checked: false },
                { name: 'dance', label: 'Dance', checked: false },
                { name: 'rap', label: 'Rap', checked: false },
            ],
            fruits: [],
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("Name: ", this.state.name)
        console.log("Password: ", this.state.password)
        console.log("Gender: ", this.state.gender)
        console.log("Agree: ", this.state.agree)
        console.log("Hobby: ", this.state.hobbies.filter(hobby => hobby.checked).map(hobby => hobby.name))
        console.log("Fruits: ", this.state.fruits)
    }

    handleInput(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({ [e.target.name]: value })
    }

    handleHobbiesChange(e, index) {
        const hobbies = [...this.state.hobbies]
        hobbies[index].checked = e.target.checked
        this.setState({ hobbies })
    }

    handleFruitsChange(e) {
        // const selectedValues = Array.from(e.target.selectedOptions).map(option => option.value)
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({ fruits: selectedValues })
    }

    render() {
        const { name, password, agree, hobbies } = this.state
        return (
            <div>
                <h1>Forms</h1>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {/* 常规表单字段 */}
                    <div>
                        <label htmlFor="name">
                            Name: <input type="text" id="name" name='name' value={name}
                                onChange={e => this.handleInput(e)} />
                        </label>
                        <label htmlFor="password">
                            Password: <input type="password" id="password" name='password' value={password}
                                onChange={e => this.handleInput(e)} />
                        </label>
                    </div>

                    {/* 单选框 */}
                    <div>
                        <label htmlFor="male">
                            <input type="radio" id="male" name='gender' value="male" onChange={e => this.handleInput(e)} /> Male
                        </label>
                        <label htmlFor="famale">
                            <input type="radio" id="famale" name='gender' value="famale" onChange={e => this.handleInput(e)} /> Famale
                        </label>
                    </div>

                    {/* 复选框 */}
                    <div>
                        <label htmlFor="agree">
                            Is agree: <input type="checkbox" id="agree" name='agree' checked={agree} onChange={e => this.handleInput(e)} />
                        </label>
                    </div>

                    {/* 复选框组 */}
                    <div>
                        {hobbies.map((hobby, index) => <label key={hobby.name} htmlFor={hobby.name}>
                            <input type="checkbox" id={hobby.name} name={hobby.name} checked={hobby.checked} onChange={(e) => this.handleHobbiesChange(e, index)} /> {hobby.label}
                        </label>
                        )}
                    </div>

                    {/* 下拉框(多选) */}
                    <div>
                        <select multiple onChange={e => this.handleFruitsChange(e)} name="fruits">
                            <option value="apple">Apple</option>
                            <option value="orange">Orange</option>
                            <option value="banana">Banana</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App