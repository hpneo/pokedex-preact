import { h, Component } from 'preact';
import { reduxForm, handleSubmit, Field } from 'redux-form';

import style from '../profile/style';

class ProfileEditor extends Component {
  render(props) {
    const { match: { params: { user } } } = props;
    const { handleSubmit } = props;

    return (
      <div class={style.profile}>
        <form onSubmit={handleSubmit}>
          <Field name='name' component='input' type='text' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'profile-editor',
  onSubmit: data => console.log(data),
})(ProfileEditor);
