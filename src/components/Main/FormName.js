import React from "react"
import { useStore } from "../../store"
import styled from "styled-components"

export default function FormName() {
  const { name, setName } = useStore()
  return (
    <>
      <NameForm onClick={(e) => e.preventDefault(e)}>
        <label>이름을 입력해주세요</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
      </NameForm>
    </>
  )
}

const NameForm = styled.form`
position: relative;
  margin: 20px 0 52px;
  label,
  input {
    display: block;
  }
  label {
    text-align: left;
    font-size: 14px;
    margin-bottom: 4px;
  }
  input {
    position: relative;
    width: 100%;
    padding: 10px 0;
    background: transparent;
    border: none;
    font-size: 18px;
    &:focus,
    &:active {
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
    }
  }
  &::after {
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  background:#171717;
  height:0.7px;
}
`
