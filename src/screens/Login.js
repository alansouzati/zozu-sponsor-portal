import React, { Component } from 'react';
import Form from 'react-formify';
import { connect } from 'react-redux';
import { getStatus } from 'redux-resource';
import { RoutedAnchor as Anchor, Box, Button, Heading, Text, TextInput } from 'grommet';

import { login } from '../actions/session';
import Field from '../components/Field';
import { userRules } from '../utils';

class Login extends Component {
  onLogin = (email, password) => {
    const { dispatch } = this.props;
    dispatch(login(email, password));
  }
  render() {
    const { presentation: { narrow }, ...rest } = this.props;
    const loginStatus = getStatus(rest, 'session.requests.login.status');
    const buttonNode = !loginStatus.pending ? (
      <Button type='submit' primary={true} label='Login' />
    ) : (
      <Box align='center' margin='small'>
        Login in process...
      </Box>
    );
    return (
      <Box full={true} direction='row'>
        {!narrow && <Box basis='1/2' background="url('/img/splash.jpg')" />}
        <Box basis={narrow ? 'full' : '1/2'} align='center' pad={{ top: 'xlarge', horizontal: 'small' }}>
          <img width='250px' src='/img/logo.svg' alt='Zozu Project Logo' />
          <Heading level={2}><strong>Sponsor Portal</strong></Heading>
          <Box pad={{ vertical: 'medium' }} direction='row' alignSelf='stretch' justify='center'>
            <Box basis='medium'>
              <Form onSubmit={data => this.onLogin(data.email, data.password)} rules={userRules}>
                {(state, errors) => (
                  <div>
                    <Field label='Email' error={errors.email}>
                      <TextInput plain={true} {...state.email} />
                    </Field>
                    <Field label='Password' error={errors.password}>
                      <TextInput plain={true} type='password' {...state.password} />
                    </Field>
                    <Box tag='footer' pad={{ vertical: 'medium' }}>
                      {loginStatus.failed && (
                        <Text
                          color='status-critical'
                          margin={{ bottom: 'medium' }}
                          textAlign='center'
                        >
                          Email or password invalid.
                        </Text>
                      )}
                      {buttonNode}
                      <Box pad={{ vertical: 'medium' }}>
                        <Text>Don&#39;t have an account? <Anchor path='/sign-up'>sign up</Anchor></Text>
                        <Box align='start' pad={{ vertical: 'xsmall' }}>
                          <Anchor path='/forgot-password'>Forgot Password?</Anchor>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                )}
              </Form>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default connect((state, ownProps) => ({
  ...ownProps,
  presentation: { ...state.presentation },
  session: { ...state.session },
}))(Login);
