import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {nanoid} from "nanoid"

export default function Category(props) {

  function selectCategory(event) {
    props.setCategory(event.target.value)
  }

  const categoryItems = props.selectIndex.map(category => {
    return (
      <MenuItem value={category.value} key={nanoid()}>
        {category.label}
      </MenuItem>
    )
  })

  return (
    <Box className="category-select">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="cate">Category</InputLabel>
        <Select
        // デフォルト値を何かしら設定しないとエラー
          defaultValue="0"
          labelId="cate"
          onChange={selectCategory}
          label="Category"
        >

          {categoryItems}

        </Select>
      </FormControl>
    </Box>
    
  )
}