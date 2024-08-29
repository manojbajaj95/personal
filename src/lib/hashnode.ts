interface Query {
  query: string
  variables?: object
  tags?: Array<string>
}

export async function query({ query, variables, tags }: Query) {
  const data = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '038b01d6-24f4-4a5d-b483-108aac4c3471',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
    },
  }).then((r) => r.json())
  return data
}
