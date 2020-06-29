import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import useFetch from './useFetch'

export default function Items() {
  // api call
  const wordpressUrl = 'your-domain'
  const url = `http://${wordpressUrl}/wp-json/api/wondersauce-example`
  const items = useFetch(url)
  return (
    <Grid container spacing={6}>
      {items &&
        items.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card style={{ borderRadius: 40 }} elevation={12}>
              <CardMedia
                className="thumbnail"
                image={item.featured_image}
                title={item.title}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}
