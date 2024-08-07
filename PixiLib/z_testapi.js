import Manager from "../scenes/Manager"

const _api_host_uri = document.getElementById("peach-bundle").getAttribute("data-api-host-url") + "/"

export function get_cookie () {
  var temp ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNGNmYTQ4OWJiOTdhYmE4MDg2OWY0OTE5MGI3MGM0NzkiLCJ0b2tlbiI6ImRlZDBlYzg1ZjJjYTQzNDU4ZDE0Mjg1ZmUzM2FhMGM1IiwicHJvdG9jb2wiOiIxLjEuMSIsInRpbWVzdGFtcCI6MTY1MDU5MjY1NSwiaWF0IjoxNjUwNTkyNjU2LCJleHAiOjE2ODIxMjg2NTYsImlzcyI6ImFwaS5wZWFjaGJvb2tzLmNvbSJ9.tpxWSlvfLpWJ2iVmtdgL0yC9z4dKioN9Zkka1Sjv0MY"

  fetch(_api_host_uri + "v2/account/detail", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${temp} `,
    },
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (res) {
      console.log(res)
      if (res.code === 0) {
        Manager.userName = res.data.account.id
      }
    })
  return temp
}
//test.js용
const Cookie = get_cookie()

export function _api_do (m, uri, body, res) {
  try {
    fetch(_api_host_uri + uri, {
      method: m,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookie}`,
        pragma: "no-cache",
        "cache-control": "no-cache",
      },
      body: JSON.stringify(body),
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        res(json)
      })
  } catch (error) {
    console.log(error)
  }
}

export function _api_get (m, uri, res) {
  try {
    fetch(_api_host_uri + uri, {
      method: m,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookie}`,
        pragma: "no-cache",
        "cache-control": "no-cache",
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        res(json)
      })
  } catch (error) {
    console.log(error)
  }
}
export async function _api_read (m, uri, body, res) {
  fetch(_api_host_uri + uri, {
    method: m,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookie}`,
      pragma: "no-cache",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(body),
  })
    .then(function (response) {
      response.blob().then(function (myBlob) {
        res(myBlob)
      })
    })
    .catch(e => {
      console.error(e)
    })
}

export function _api_down (m, uri, body, res) {
  fetch(_api_host_uri + uri, {
    method: m,
    headers: {
      Authorization: `Bearer ${Cookie}`,
      pragma: "no-cache",
      "cache-control": "no-cache",
    },
    body: body,
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      res(json)
    })
    .catch(e => {
      console.error(e)
    })
}

export function get_CardList (value, res) {
  _api_get(
    "GET",
    `v2/illust/board/raws?page_number=1&take_number=0&order_number=1&search_number=3001&search_keyword=${value}`,
    res,
  )
}

export function get_BookMark (num, res) {
  _api_get("GET", `v2/story/bookmark?story_number=${num}`, res)
}

export function delete_bookmark (story_number, page_numbers, res) {
  _api_do(
    "DELETE",
    `v2/story/bookmark`,
    {
      story_number,
      page_numbers,
    },
    res,
  )
}

export function set_bookmark (story_number, page_numbers, res) {
  _api_read(
    "POST",
    `v2/story/bookmark`,
    {
      story_number,
      page_numbers,
    },
    res,
  )
}

export function get_card_detail (row, res) {
  _api_get("GET", `admin/v2/raw/illust/detail?raw_number=${row}`, res)
}

export function get_AudioList (pagenum, order, value, res) {
  _api_get(
    "GET",
    `admin/v2/raw/voice/board?page_number=${pagenum}&take_number=15&order_number=${order}&search_number=2001&search_keyword=${value}`,
    res,
  )
}

export function download_zip (story_number, res) {
  _api_read(
    "POST",
    `v2/story/read`,
    {
      story_number,
    },
    res,
  )
}

export function download_zip_hidden (story_number, res) {
  _api_read(
    "POST",
    `v2/hidden/story/read`,
    {
      story_number,
    },
    res,
  )
}

export function get_story_detail (row, res) {
  _api_get("GET", `admin/v2/raw/story/detail?raw_number=${row}`, res)
}

export function get_storyDetail (story_num, res) {
  _api_get("GET", `v2/story/detail?story_number=${story_num}`, res)
}

export function get_hiddenStoryDetail (story_num, res) {
  _api_get("GET", `v2/hidden/story/detail?story_number=${story_num}`, res)
}

export function saveStory (raw_taggings, raw_status, raw_cards, raw_data, res) {
  var bodyFormData = new FormData()
  bodyFormData.append("raw_taggings", raw_taggings)
  bodyFormData.append("raw_status", raw_status)
  bodyFormData.append("raw_cards", raw_cards)
  bodyFormData.append("raw_data", raw_data)
  _api_down("POST", "admin/v2/raw/story", bodyFormData, res)
}

export function editStory (raw_number, raw_cards, raw_data, res) {
  var bodyFormData = new FormData()
  bodyFormData.append("raw_number", raw_number)
  bodyFormData.append("raw_cards", raw_cards)
  bodyFormData.append("raw_data", raw_data)
  _api_down("POST", "admin/v2/raw/story/edit", bodyFormData, res)
}

export function changeDone (raw_number, raw_status, res) {
  _api_do(
    "PUT",
    `admin/v2/raw/story/status`,
    {
      raw_number,
      raw_status,
    },
    res,
  )
}

export function perUse (story_number, res) {
  _api_do(
    "POST",
    `v2/story/peruse`,
    {
      story_number,
    },
    res,
  )
}
