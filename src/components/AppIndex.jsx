import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container, Segment, Grid, Embed, Header, Icon, Search, Label, Tab } from 'semantic-ui-react';
import MenuBar from './MenuBar/MenuBar';
import FocusPic from './FocusPic/FocusPic';
import DividerTitle from './DividerTitle/DividerTitle';
import VideoListItem from './VideoListItem/VideoListItem';
import Footer from './Footer/Footer';


export default class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    moment.locale('zh-CN');
  }

  componentDidMount() {
    window.setInterval(() => {
      document.getElementById('queryDate').innerHTML = moment().format('YYYY年 MM月 DD日 ddd');
      document.getElementById('queryTime').innerHTML = moment().format('HH : mm : ss A');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }


  render() {
    const att1 = {
      showThumbs: false,
      showStatus: false,
      autoPlay: true,
      showArrows: true,
      emulateTouch: true,
      infiniteLoop: true,
      useKeyboardArrows: true,
      dynamicHeight: true,
    };
    const att2 = {
      showThumbs: false,
      showStatus: false,
      autoPlay: true,
      showArrows: false,
      emulateTouch: true,
      infiniteLoop: true,
      useKeyboardArrows: true,
      dynamicHeight: true,
    };
    const picArr1 = ['1.jpg', '2.jpg', '3.jpg'];
    const picArr2 = ['1-1.jpg', '2-2.jpg', '3-3.jpg'];
    const panes = [
      {
        menuItem: { key: 'hot', icon: 'icon-fire', content: '热门' },
        render: () =>
          (<Tab.Pane attached>
            <VideoListItem embVideo={{
 id: 'J7UwSVsiwzI', placeholder: 'https://oukbnub30.bkt.clouddn.com/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561',
}}
            />
            <VideoListItem embVideo={{
 id: 'a5JySIRcPFs', placeholder: 'https://oukbnub30.bkt.clouddn.com/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347',
}}
            />
            <VideoListItem embVideo={{
 id: 'gJscrxxl_Bg', placeholder: 'https://oukbnub30.bkt.clouddn.com/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391',
}}
            />
           </Tab.Pane>),
      },
      {
        menuItem: { key: 'popular', icon: 'icon-thumbs-up', content: '流行' },
        render: () =>
          (<Tab.Pane attached>
            <VideoListItem embVideo={{
 id: 'a5JySIRcPFs', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347',
}}
            />
            <VideoListItem embVideo={{
 id: 'J7UwSVsiwzI', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561',
}}
            />
            <VideoListItem embVideo={{
 id: 'gJscrxxl_Bg', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391',
}}
            />
           </Tab.Pane>),
      },
      {
        menuItem: { key: 'guess', icon: 'icon-gift2', content: '推荐' },
        render: () =>
          (<Tab.Pane attached>
            <VideoListItem embVideo={{
 id: 'gJscrxxl_Bg', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391',
}}
            />
            <VideoListItem embVideo={{
 id: 'J7UwSVsiwzI', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561',
}}
            />
            <VideoListItem embVideo={{
 id: 'a5JySIRcPFs', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347',
}}
            />
           </Tab.Pane>),
      },
    ];
    return (
      <div>
        <MenuBar />
        <Container>
          <Segment className="marTop">
            <Grid>
              <Grid.Column computer={10} mobile={16}>
                <FocusPic att={att1} picArr={picArr1} />
              </Grid.Column>
              <Grid.Column computer={6} mobile={16}>
                <FocusPic att={att2} picArr={picArr2} />
                <div className="banner_pic">
                  <img src="http://oukbnub30.bkt.clouddn.com/banner.jpg" alt="" />
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        <Container>
          <Grid>
            {/* 左测列（大屏视频） */}
            <Grid.Column computer={7} mobile={16}>
              <Segment className="marTop">
                <Embed
                  id="125292332"
                  placeholder="http://oukbnub30.bkt.clouddn.com/vimeo_placehoder.jpg"
                  source="vimeo"
                  icon="icon-media-play-outline"
                />
                <Header as="h2" content="Video's Name" subheader="By Kelvin" />
                <Grid>
                  <Grid.Column computer={3} mobile={5}>
                    <Header as="h6">
                      <Icon className="icon-calendar2" size="mini" />
                      <Header.Content>25/3/2015</Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={5}>
                    <Header as="h6">
                      <Icon className="icon-heart" size="mini" />
                      <Header.Content>1,200</Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid>
                <Container textAlign="justified" className="marTop">
                  Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non.ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan
                </Container>
                <DividerTitle titles="Vimeo" leftWidth="2" titlesWidth="2" lineColor="#17B1E5" lineStyle="sigleCrude" />
                <Grid>
                  <Grid.Column computer={8} mobile={16}>
                    <Embed
                      id="125292332"
                      placeholder="http://oukbnub30.bkt.clouddn.com/vimeo_placehoder.jpg"
                      source="vimeo"
                      icon="icon-media-play-outline"
                      className="marTop-"
                    />
                    <Header as="h2" content="Video's Name" subheader="By Kelvin" />
                    <Grid>
                      <Grid.Column computer={6} mobile={5}>
                        <Header as="h6">
                          <Icon className="icon-calendar2" size="mini" />
                          <Header.Content>25/3/2015</Header.Content>
                        </Header>
                      </Grid.Column>
                      <Grid.Column computer={6} mobile={5}>
                        <Header as="h6">
                          <Icon className="icon-heart" size="mini" />
                          <Header.Content>1,200</Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid>
                    <Container textAlign="justified" className="marTop">
                      Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.
                    </Container>
                  </Grid.Column>
                  <Grid.Column computer={8} mobile={16}>
                    <VideoListItem
                      embVideo={{
 id: 'J7UwSVsiwzI', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561', stars: 3,
}}
                      showTime={false}
                      showWatched={false}
                      showStars
                    />
                    <VideoListItem
                      embVideo={{
 id: 'a5JySIRcPFs', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347', stars: 4,
}}
                      showTime={false}
                      showWatched={false}
                      showStars
                    />
                    <VideoListItem
                      embVideo={{
 id: 'gJscrxxl_Bg', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391', stars: 3,
}}
                      showTime={false}
                      showWatched={false}
                      showStars
                    />
                    <VideoListItem
                      embVideo={{
 id: 'J7UwSVsiwzI', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561', stars: 4,
}}
                      showTime={false}
                      showWatched={false}
                      showStars
                    />
                    <VideoListItem
                      embVideo={{
 id: 'a5JySIRcPFs', placeholder: 'http://oukbnub30.bkt.clouddn.com/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347', stars: 3,
}}
                      showTime={false}
                      showWatched={false}
                      showStars
                    />
                  </Grid.Column>
                </Grid>


              </Segment>
            </Grid.Column>

            {/* 中间列（小屏视频、画廊） */}
            <Grid.Column computer={5} mobile={16}>
              <Segment className="marTop">
                <DividerTitle titles="视频" leftWidth="3" titlesWidth="2" lineColor="#000" lineStyle="tripleThin" />
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="videoTab" />
                <DividerTitle titles="画廊" leftWidth="3" titlesWidth="2" lineColor="#000" lineStyle="tripleThin" />
                <Container className="galContain">
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-1.jpg" alt="gal-1" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-2.jpg" alt="gal-2" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-3.jpg" alt="gal-3" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-4.jpg" alt="gal-4" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-5.jpg" alt="gal-5" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-6.jpg" alt="gal-6" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-7.jpg" alt="gal-7" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-8.jpg" alt="gal-8" /></div>
                  <div><img src="http://oukbnub30.bkt.clouddn.com/gal-1.jpg" alt="gal-1" /></div>
                </Container>


              </Segment>
            </Grid.Column>

            {/* 右侧列（搜索、标签） */}
            <Grid.Column computer={4} mobile={16}>
              <Segment className="marTop">
                <DividerTitle titles="搜索" leftWidth="3" titlesWidth="3" lineColor="#000" lineStyle="tripleThin" />
                <Search className="searchInput" icon="icon-search" />
                <DividerTitle titles="标签" leftWidth="3" titlesWidth="3" lineColor="#000" lineStyle="tripleThin" />
                <Container>
                  <Label.Group color="blue">
                    <Label>前端</Label>
                    <Label>资源</Label>
                    <Label>ES6</Label>
                    <Label>JavaScript</Label>
                    <Label>React</Label>
                    <Label>Webpack</Label>
                  </Label.Group>
                </Container>
                <DividerTitle titles="日期时间" leftWidth="3" titlesWidth="5" lineColor="#000" lineStyle="tripleThin" />
                <Header as="h4">
                  <Icon className="icon-calendar2" />
                  <Header.Content className="timeFont" id="queryDate"></Header.Content>
                </Header>
                <Header as="h4">
                  <Icon className="icon-clock" />
                  <Header.Content className="timeFont" id="queryTime"></Header.Content>
                </Header>
                <img src="http://oukbnub30.bkt.clouddn.com/earthTime.jpg" alt="" width="100%" />
                <DividerTitle titles="友情链接" leftWidth="3" titlesWidth="5" lineColor="#000" lineStyle="tripleThin" />
                <Container className="links">
                  <Header as="h5" as={Link} to="https://github.com/" target="_blank">
                    <Icon className="icon-brand8" />
                    <Header.Content>github<Header.Subheader>https://github.com/</Header.Subheader></Header.Content>
                  </Header>
                  <Header as="h5" as={Link} to="https://bitbucket.org/" target="_blank">
                    <Icon className="icon-brand" />
                    <Header.Content>bitbucket<Header.Subheader>https://bitbucket.org/</Header.Subheader></Header.Content>
                  </Header>
                  <Header as="h5" as={Link} to="https://stackoverflow.com/" target="_blank">
                    <Icon name="stack overflow" />
                    <Header.Content>stack overflow<Header.Subheader>https://stackoverflow.com/</Header.Subheader></Header.Content>
                  </Header>
                  <Header as="h5" as={Link} to="https://500px.com/home" target="_blank">
                    <Icon className="icon-brand2" />
                    <Header.Content>500px<Header.Subheader>https://500px.com/home</Header.Subheader></Header.Content>
                  </Header>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
