<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/post", name="post.")
 */
class PostController extends AbstractController
{
    /**
     * @Route("/api/posts/", name="samplePosts")
     */
    public function dataAction()
    {
        return $this->json([
            [
                'id' => 1,
                'author' => 'Chris Colborne',
                'avatarUrl' => 'http://1.gravatar.com/avatar/13dbc56733c2cc66fbc698cdb07fec12',
                'title' => 'Bitter Predation',
                'description' => 'Thirteen thin, round towers form an almost perfectly squared barrier around this marvelous castle and are connected by big, thin walls made of light pink stone. Rough windows are scattered thinly around the walls in fairly symmetrical patterns, along with overhanging crenelations for archers and artillery.',
            ],
            [
                'id' => 2,
                'author' => 'Louanne Perez',
                'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
                'title' => 'Strangers of the Ambitious',
                'description' => "A huge gate with thick metal doors, a regular bridge and large crenelations offers a warm haven within these cold, isolated landsand it's the only way in, at least to those unfamiliar with the castle and its surroundings.",
            ],
            [
                'id' => 3,
                'author' => 'Theodorus Dietvorst',
                'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
                'title' => 'Outsiders of the Mysterious',
                'description' => "Plain fields of a type of grass cover most of the fields outside of the castle, adding to the castle's aesthetics. This castle is relatively new, but so far it stood its ground with ease and it'll likely do so for ages to come.",
            ],
        ]);
    }

    /**
     * @Route("/", name="allPosts")
     * @param PostRepository $postRepository
     * @return JsonResponse
     */
    public function index(PostRepository $postRepository)
    {
        return $this->json($postRepository->findAll());
    }

    /**
     * @Route("/create", name="create")
     */
    public function createPost()
    {
        $post = new Post();

        $post->setTitle("We set here a title");

        $em = $this->getDoctrine()->getManager();
        $em->persist($post);
        $em->flush();

        return $this->json(["success" => true ]);
    }

    /**
     * @Route("/{id}", name="get")
     */
    public function postDetail(Post $post)
    {
        return $this->json($post);
    }
}
