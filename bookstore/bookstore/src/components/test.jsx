<Row className="carouselRow px-5 pt-4">
  <Row>
    <h2>CArousel Name</h2>
  </Row>
  <div className="carouselWithBtns">
    <CarouselButton side="Left" scroll={this.scroll} />
    <Row>
      {this.state.movies.map((movie, i) => {
        return <CarouselCard {...movie} key={i} />
      })}
    </Row>
  </div>
</Row>
