
import PropTypes from 'prop-types'
const AddCategory =
  ({
    value,
    onChange,
  }) => {
    return (
      < >
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {/*onKeyPress={(event)=> event.key === "Enter" ? onPressEnter(event.target.value): null } */}
      </ >
    )
  }

AddCategory.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default AddCategory