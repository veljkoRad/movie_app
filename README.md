#movie app

### libraries:

- embla carousell react- for carousell
- lucide-react -for icons

## Routes

1. **Home page**

- url: `/` ==> file: `app/page.tsx`

2. **Movies/Shows main pages:**

- url: `/[media]` ==> file: `app/[media]/page.tsx`

3. **List Page:**

- url: `/[media]/[list]` ==> file: `app/[media]/[list]/page.tsx`

4. **Genres Page**

- url: `/[media]/genre/[genre]` ==> file: `app/[media]/genre/[genre]/page.tsx`

5. **Single page:**

- url: `/[media]/single/[single]` ==> file: `app/[media]/single/[single]/page.tsx `

6. **Recommended page:**

- url: `/[media]/single/[single/recommended]` ==> file: `app/[media]/single/[single]/recomended/page.tsx`

7. **Similar page:**

- url: `/[media]/single/[single/similar]` ==> file: `app/[media]/single/[single]/similar/page.tsx`

8. **Search results:**

- url: `/search-results?query={query}` ==> file: `app/search-results/page.tsx`

## Data Flow

- Single page
  - `Route -> params ({media, single}) -> validate media  (media=== 'movies' ? const movie = await getMovieDetails(single)) -> fetch getDetails+getPeople -> render SinglePage({single,cast,type}) -> render Cast/Recommended/Similar`
