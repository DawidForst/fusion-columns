import css from "./Buttons.module.css"

const Buttons = ({handleSubmit, formReset}) => (
    <>
    <div className={css.container__buttons}>
    <button type="submit" onClick={(e) => 
        handleSubmit(e)}>Calculate
      </button>
      <button type="button" onClick={formReset}>Reset</button>
      </div>
      </>
  );
    
    export default Buttons;