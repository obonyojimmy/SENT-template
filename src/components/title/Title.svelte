<script>
  export let text: string

  import TextContent from '../content/TextContent.svelte'

  import './Title.scss'
</script>

<TextContent center strong {text} />
