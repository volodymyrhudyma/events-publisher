import { isEmpty } from 'lodash';
import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { Trans, WithTranslation } from 'react-i18next';
import { ValueType } from 'react-select/lib/types';
import { PAID_EVENT } from 'src/constants/event-types';
import { AM } from 'src/constants/time-types';
import { GlobalStyle } from 'src/styled';
import { IResult, ISelectOption } from 'src/types';
import Alert from 'src/ui-kit/Alert';
import Button from 'src/ui-kit/Button';
import Card from 'src/ui-kit/Card';
import Container from 'src/ui-kit/Container';
import FormDate from 'src/ui-kit/FormDate';
import FormInput from 'src/ui-kit/FormInput';
import FormNumber from 'src/ui-kit/FormNumber';
import FormRadio from 'src/ui-kit/FormRadio';
import FormSelect from 'src/ui-kit/FormSelect';
import FormTextarea from 'src/ui-kit/FormTextarea';
import Header from 'src/ui-kit/Header';
import Hint from 'src/ui-kit/Hint';
import Title from 'src/ui-kit/Title';
import { capitalize } from 'src/utils/capitalize';
import { formatDateOutput } from 'src/utils/date';
import { parseToNumber } from 'src/utils/number';
import { defaultSchema } from 'src/utils/schema/default';
import { validate } from 'src/utils/validate';
import { ButtonWrapper, InnerWrapper, Wrapper } from './styled/App.styled';
import CustomSelect from 'src/ui-kit/CustomSelect';

interface IAppProps extends WithTranslation {
  fetchCategories: () => void;
  fetchEmployees: () => void;
  categories: ISelectOption[];
  employees: Array<ValueType<ISelectOption>>;
}

interface IAppState {
  title: string;
  description: string;
  category?: ISelectOption;
  eventType: string;
  fee: string;
  coordinator?: ISelectOption;
  email: string;
  date: string;
  time: string;
  timeType: string;
  reward: string;
  duration: string;
  success: boolean;
  allowSubmit: boolean;
  errors: string[];
}

const paymentOptions: ISelectOption[] = [
  { value: 'free', label: <Trans i18nKey="events.free" /> },
  { value: 'paid', label: <Trans i18nKey="events.paid" /> },
];

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: undefined,
      eventType: PAID_EVENT,
      fee: '',
      coordinator: undefined,
      email: '',
      date: '',
      time: '',
      timeType: AM,
      reward: '',
      duration: '',
      success: false,
      allowSubmit: false,
      errors: [],
    };
  }
  public async componentDidMount() {
    const { fetchCategories, fetchEmployees } = this.props;
    await Promise.all([fetchCategories(), fetchEmployees()]);
    this.setState({
      ...this.state,
      category: this.props.categories[0],
      // @ts-ignore
      coordinator: this.props.employees[0].options[0],
    });
  }
  public setValues = (
    name: string,
    value: string | ISelectOption,
    error: boolean
  ) => {
    const { errors } = this.state;
    this.setState({
      ...this.state,
      [name]: value,
      errors: error ? [...errors, name] : errors.filter(item => item !== name),
    });
  };
  public validate = (name: string, value: string) => {
    return validate(name, value, defaultSchema);
  };
  public onFieldChange = (
    name: string,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const error = this.validate(name, value);
    this.setValues(name, value, error);
  };
  public onSelectChange = (name: string, selectedOption: ISelectOption) => {
    const { value } = selectedOption;
    const error = this.validate(name, value);
    this.setValues(name, selectedOption, error);
  };
  public onRadioChange = (name: string, value: string) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  public onSubmit = (e: SyntheticEvent) => {
    const {
      title,
      description,
      category,
      eventType,
      fee,
      reward,
      coordinator,
      duration,
      date,
      time,
      timeType,
    } = this.state;
    e.preventDefault();
    const result: IResult = {
      title,
      description,
      category_id: category ? parseToNumber(category.value) : 0,
      paid_event: eventType === PAID_EVENT,
      event_fee: fee ? parseToNumber(fee) : 0,
      reward: reward ? parseToNumber(reward) : 0,
      date: formatDateOutput(date, time, timeType),
      coordinator: {
        email: coordinator
          ? coordinator.extraData
            ? coordinator.extraData
            : ''
          : '',
        id: coordinator ? coordinator.value : '',
      },
      duration: duration ? parseToNumber(duration) : 0,
    };
    console.log('result');
    console.log(result);
    this.onFormComplete();
  };
  public onFormComplete = () => {
    this.setState({
      ...this.state,
      success: true,
    });
  };
  public hasError = (
    name: string,
    translationKey: string = 'empty'
  ): string => {
    const { t } = this.props;
    const { errors } = this.state;
    return errors.includes(name)
      ? t(`errors.${translationKey}`, {
          field: capitalize(name),
        })
      : '';
  };
  public isFormValid = () => {
    const { title, description, eventType, fee, date, time } = this.state;
    // Bad code :)
    if (eventType === PAID_EVENT) {
      return (
        !isEmpty(title) &&
        !isEmpty(description) &&
        !isEmpty(fee) &&
        !isEmpty(date) &&
        !isEmpty(time)
      );
    } else {
      return (
        !isEmpty(title) &&
        !isEmpty(description) &&
        !isEmpty(date) &&
        !isEmpty(time)
      );
    }
  };
  public componentDidUpdate() {
    this.isFormValid();
  }
  public render() {
    const { t, categories, employees } = this.props;
    const {
      title,
      description,
      category,
      eventType,
      fee,
      coordinator,
      email,
      date,
      time,
      timeType,
      reward,
      duration,
      success,
    } = this.state;
    return (
      <Wrapper>
        <GlobalStyle />
        <Header>
          <Container>{t('general.heading')}</Container>
        </Header>
        <Container>
          <InnerWrapper>
            {success ? (
              <Alert
                primaryText={t('alert.primary')}
                secondaryText={t('alert.secondary')}
              />
            ) : (
              <form onSubmit={this.onSubmit}>
                <Card>
                  <Title>{t('form.about.heading')}</Title>
                  <FormInput
                    label={t('form.about.title.label')}
                    placeholder={t('form.about.title.placeholder')}
                    required={true}
                    value={title}
                    onChange={this.onFieldChange.bind(this, 'title')}
                    error={this.hasError('title')}
                  />
                  <FormTextarea
                    label={t('form.about.description.label')}
                    placeholder={t('form.about.description.placeholder')}
                    required={true}
                    value={description}
                    maxLength={140}
                    onChange={this.onFieldChange.bind(this, 'description')}
                    error={this.hasError('description')}
                  />
                  <FormSelect
                    label={t('form.about.category.label')}
                    placeholder={t('form.about.category.placeholder')}
                    hint={<Hint>{t('form.about.category.hint')}</Hint>}
                    options={categories}
                    value={category || categories[0]}
                    onChange={this.onSelectChange.bind(this, 'category')}
                  />
                  <FormRadio
                    label={t('form.about.payment.label')}
                    options={paymentOptions}
                    value={eventType}
                    onChange={this.onRadioChange.bind(this, 'eventType')}
                  />
                  {eventType === PAID_EVENT && (
                    <FormNumber
                      placeholder={t('form.about.payment.paid.placeholder')}
                      tip={t('form.about.payment.paid.tip')}
                      value={fee}
                      onChange={this.onFieldChange.bind(this, 'fee')}
                      error={this.hasError('fee')}
                    />
                  )}
                  <FormNumber
                    label={t('form.about.reward.label')}
                    placeholder={t('form.about.reward.placeholder')}
                    tip={t('form.about.reward.tip')}
                    value={reward}
                    onChange={this.onFieldChange.bind(this, 'reward')}
                  />
                </Card>
                <Card>
                  <Title>{t('form.coordinator.heading')}</Title>
                  <FormSelect
                    label={t('form.coordinator.coordinator.label')}
                    placeholder={t('form.coordinator.coordinator.label')}
                    required={true}
                    options={employees}
                    value={coordinator}
                    onChange={this.onSelectChange.bind(this, 'coordinator')}
                    error={this.hasError('coordinator')}
                  />
                  <FormInput
                    label={t('form.coordinator.email.label')}
                    placeholder={t('form.coordinator.email.placeholder')}
                    value={email}
                    onChange={this.onFieldChange.bind(this, 'email')}
                    error={this.hasError('email', 'email')}
                  />
                </Card>
                <Card>
                  <Title>{t('form.when.heading')}</Title>
                  <FormDate
                    label={t('form.when.startsOn.label')}
                    placeholder={t('form.when.startsOn.placeholder')}
                    tip={t('form.when.startsOn.tip')}
                    required={true}
                    dateValue={date}
                    onDateChange={this.onFieldChange.bind(this, 'date')}
                    timeValue={time}
                    onTimeChange={this.onFieldChange.bind(this, 'time')}
                    timeTypeValue={timeType}
                    onTimeTypeChange={this.onRadioChange.bind(this, 'timeType')}
                    error={this.hasError('date') || this.hasError('time')}
                  />
                  <FormNumber
                    label={t('form.when.duration.label')}
                    placeholder={t('form.when.duration.placeholder')}
                    tip={t('form.when.duration.tip')}
                    value={duration}
                    onChange={this.onFieldChange.bind(this, 'duration')}
                  />
                </Card>
                <ButtonWrapper>
                  <Button disabled={!this.isFormValid()}>
                    {t('form.submit')}
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          </InnerWrapper>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
