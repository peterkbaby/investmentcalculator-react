
export default function Calculator({onChange, userInput}) {
    
    
    return (
        


        <section id="cal">
            <div className="input-group">
                <label>Initial Investment
                <input value={userInput.initialInvestment}
                onChange={(e) => onChange('initialInvestment', e.target.value)}
                type="number" required/>
                </label>
                <br />
                <label>Annual Investment
                    <input value={userInput.annualInvestment}
                    onChange={(e) => onChange('annualInvestment', e.target.value)}
                    type="number" required/>
                </label>
                <label>Expected Return
                    <input 
                    value={userInput.expectedReturn}
                    onChange={(e) => onChange('expectedReturn', e.target.value)}
                    type="number" required/>
                </label>
                <label>Duration
                    <input 
                    value={userInput.duration}
                    onChange={(e) => onChange('duration', e.target.value)}
                    type="number" required/>
                </label>
            </div>
        </section>
    )
}