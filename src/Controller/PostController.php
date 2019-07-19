<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/post", name="post.")
 */
class PostController extends AbstractController
{
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
    public function createPost(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $post = new Post();
        $post->setTitle($data['title']);

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

    /**
     * @Route("/remove/{id}", name="remove")
     * @param Post $post
     * @return JsonResponse
     */
    public function remove(Post $post)
    {
        $em = $this->getDoctrine()->getManager();

        $em->remove($post);
        $em->flush();

        return $this->json(["deleted" => true ]);
    }
}
