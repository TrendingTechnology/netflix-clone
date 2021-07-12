import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const ScContainer = styled.div``;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  // HomePresenter함수는 만약 loading이 true면 Loader컴포넌트를, false면 ScContainer컴포넌트를 리턴한다.
  return loading ? (
    <Loader></Loader>
  ) : (
    <ScContainer>
      {/* nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing Movies">{nowPlaying.map((movie) => movie.title)}</Section> */}
      {/* a && b && c는 a가 true이고, b가 true이고, c가 true일 때, 맨 마지막 c를 리턴한다. */}
      {/* nowPlaying이 존재하는자 체크하고, nowPlaying의 배열 길이가 0보다 큰 지 체크하고, Section 컴포넌트가 존재하는지 체크한 후, Section컴포넌트를 리턴하도록 한다. */}
      {/* react에서 children은 일반적으로 <Section> </Section> Section컴포넌트의 사이의 값을 전달 받는다. */}
      {/* 그래서 여기서는 배열인 nowPlaying을 가져와서 map()메서드를 통해 movie를 뽑아와서 그 movie의 title을 Section.js의 children에 순차적으로 전달해준다. */}
      {/* 주의할 점은 <span></span> 이렇게 태그 사이에 자바스크립트 형태의 데이터를 넣을 떄는 {}로 묶어줘야 한다. */}
      {/* 그리고 각각의 span에게 key로 movie.id를 넣어준다. 왜냐하면 각각의 데이터들을 고유해야 하기 때문이다. */}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing Movies">
          {nowPlaying.map((movie) => (
            // <span key={movie.id}>{movie.title}</span>

            // Poster컴포넌트를 호출하고 Poster컴포넌트에게 각각의 props로 데이터를 넣어서 전달해준다.
            // substring은 문자열을 자를 때 사용하는 메서드이다.
            // movie.release_date ? movie.release_date.substring("0","4"):""  를 통해 movie.release_date가 있으면 movie.release_date.substring("0","4")를 보여주고 없으면 "" 빈 문자열을 보낸다.
            // movie.release_date.substring("0","4")를 통해 문자열에서 앞에서부터 0부터 3까지를 자른다.
            // 또는 movie.release_date && movie.release_date.substring("0","4") &&를 이용해서 movie.release_date가 존재해서 true일 때 movie.release_date.substring("0","4")가 실행되도록 할 수 있다.
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring("0", "4") : ""}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie) => (
            // <span key={movie.id}>{movie.title}</span>
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring("0", "4") : ""}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            // <span key={movie.id}>{movie.title}</span>
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring("0", "4") : ""}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}

      {/* 만약 error가 존재하면 <Message>컴포넌트에 text props로는 error를, color props로는 사용자가 설정할 색깔을 전달해준다. */}
      {/* 여기서는 color로는 red를 text로는 error변수를 전달해준 것이다. */}
      {error && <Message color="red" text={error}></Message>}
    </ScContainer>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
